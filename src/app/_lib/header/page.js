import Image from "next/image"

function Header() {
  return (
    <div className="px-8 py-4 bg-gradient-to-b from-black">
      <Image className="" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" width={100}
      height={100} />
    </div>
  )
}

export default Header