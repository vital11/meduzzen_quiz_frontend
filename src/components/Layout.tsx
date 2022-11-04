
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

            <main className=" bg-gray-50">
                <div className="mx-auto w-[2500px] max-w-10xl py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="h-96 rounded-2xl border-gray-200  bg-white">
                            {children}
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}
