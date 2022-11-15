
interface IPageTitle {
    title: string,
}

const PageTitle = ({title}: IPageTitle) => {
    return (
        <div className="flex items-center w-full h-16 px-5 pb-2 font-medium tracking-wide bg-gray-100 rounded-t-2xl">
            {title}
        </div>
    )
}

export default PageTitle;

