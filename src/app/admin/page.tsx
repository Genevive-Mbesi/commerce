import { Card, CardDescription, CardHeader,CardTitle,CardContent } from "@/components/ui/card";
import db from "@/db/db";
import { formatCurrency,formatNumber } from "@/lib/formatters";




async function getSalesData() {
   const data= await db.order.aggregate({
        _sum: { priceInPaidInCents: true},
        _count: true
    })
    return {
        amount:(data._sum.priceInPaidInCents || 0)/100,
        numberOfSales:data._count
    }
}

async function getUserData() {
   const [userCount, orderData]= await Promise.all([
        db.user.count(),
      db.order.aggregate({
        _sum: {priceInPaidInCents:true}
      }),
    ])
    return {
        userCount,
        averageValuePerUser: userCount === 0 ? 0 : 
        (orderData._sum.priceInPaidInCents || 0) / userCount / 100
    }
}




export default async function AdminDashboard() {
    const [salesData, userData] = await Promise.all([
        getSalesData(),
        getUserData()

    ])
   
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       <DashboardCard title="Sales" subtitle={`${formatNumber(salesData.numberOfSales)} Orders`} 
       body={formatCurrency(salesData.amount)}/>
       <DashboardCard title="Customers" subtitle={`${formatCurrency(
        userData.averageValuePerUser
    )} Average Value`} 
       body={formatNumber(userData.userCount)}/>
    </div>

    
  )
}

type DashboardCardProps ={
    title:string
    subtitle:string
    body:string
}

function DashboardCard({title, subtitle,body}:
DashboardCardProps){
    return  <Card>
    <CardHeader>
    <CardTitle> {title}</CardTitle>
    <CardDescription>{subtitle}</CardDescription>
    </CardHeader>
    <CardContent>
        <p>{body}</p>
    </CardContent>
</Card>
}

