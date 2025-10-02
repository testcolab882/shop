const Footer=()=>{
    const year=new Date().getFullYear()
    return <>
        <footer className="text-center w-full max-w-280 mx-auto">
            Shop &copy; {year}
        </footer>
    </>
}

export default Footer