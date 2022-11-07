
interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <div>
                {/* <ToolBar/>
                <Sides/>
                <Backdrop/> */}
            </div>

            <main className="flex-wrap w-full h-full mx-auto bg-gray-50 text-gray-500 text-md pb-25">
                <div className="mx-auto w-[2500px] h-full min-h-[50%] bg-gray-100 pt-2 pb-6 rounded-2xl pb-150">
                    <div className="min-h-[50%] bg-gray-100 rounded-2xl">
                        {children}
                    </div>
                </div>
            </main>

            <footer className="w-full h-20 mx-auto bg-gray-50">
				<div className="mx-auto w-[2500px] flex">
				</div>
			</footer>

        </>
    );
}
