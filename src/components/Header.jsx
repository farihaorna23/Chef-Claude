import chefLogo from "../assets/Images/chef-claude-icon.png"

const Header = () => {
  return (
    <nav>
      <img src={chefLogo}/>
      <span>Chef Claude</span>
    </nav>
  )
}

export default Header;