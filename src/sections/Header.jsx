
import Button from "./Button";
import MyLi from "./MyLi";



function Header() {

    let myLiData = [
        'Home',
        'About',
        'Contact',
        'Services',
        'Portfolio'
    ];

    myLiData.map((item, i, a) => {
        console.log(item, i, a);
        
    })

  return (
    <header className="p-2 bg-red-200 flex justify-between">
        <span>Logo</span>
        <ul className="flex ">
           {myLiData.map((item, index) => {
            return <MyLi key={index} data={item} />
           })}
        </ul>
        <div>
            <Button text="Log In" />
            <Button text="Register" />
        </div>
    </header>
  )
}

export default Header