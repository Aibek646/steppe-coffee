function App() {
  return (
    <div>
      <div className="flex items-center justify-between bg-slate-900 text-white p-4">
        <div className="font-bold">Logo</div>

        <div className="hidden sm:flex gap-2">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <button className="text-xl cursor-pointer">---</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center font-semibold text-white p-6 gap-6 text-2xl sm:text-lg">
        <div className="bg-slate-900 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500">
          Feature One
        </div>
        <div className="bg-slate-900 p-4 rounded">Feature Two</div>
        <div className="bg-slate-900 p-4 rounded">Feature Three</div>
        <div className="bg-slate-900 p-4 rounded">Feature One</div>
        <div className="bg-slate-900 p-4 rounded">Feature One</div>
        <div className="bg-slate-900 p-4 rounded">Feature One</div>
        <div className="bg-slate-900 p-4 rounded">Feature One</div>
      </div>
    </div>
  );
}

export default App;
