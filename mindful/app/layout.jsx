import '@styles/global.css';

export const metadata = {
    title:'Mindful',
    description:'A wellness application that helps understand and deal with emotions'
}

const RootLayout = ({children}) => {
  return (
   <html lang='eng'>
    <body>
        <div className='main'>
            <div className='gradient'>
                <main className='app'>
                    {children}

                </main>

            </div>

        </div>
    </body>

   </html>
  )
}

export default RootLayout
