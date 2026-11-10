import chef from "../assets/chef.png";
function Header() {
  return (
    <>
      <div className="flex items-center justify-center gap-3 p-10 font-bold text-8xl bg-amber-50 mx-auto shadow-lg shadow-black">
        <img src={chef} className="w-10 h-10" alt="C-icon" />
        <h1 className="text-4xl">Chef Claude</h1>
      </div>
    </>
  );
}

export default Header;
