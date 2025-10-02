const Footer=()=>{
    const year=new Date().getFullYear()
    return <>
        <div className="text-center">
            Shop &copy; {year}
        </div>
    </>
}

export default Footer