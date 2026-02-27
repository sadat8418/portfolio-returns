const Navbar = () => {
  const menu = ["Home", "About", "Skills", "Projects", "Contact"]

  return (
    <nav className="fixed w-full bg-purple-950/60 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-white font-bold text-lg">
          Sadat Arefin
        </h1>

        <ul className="flex gap-6 text-sm">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-pink-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar