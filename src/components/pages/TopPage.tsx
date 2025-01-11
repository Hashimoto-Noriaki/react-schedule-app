export const TopPage = () => {
    return (
      <div className="relative">
        <header className="bg-white leading-[50px] fixed right-0 left-0 top-0">
          <div className="container mx-auto flex justify-between">
            <p className="logo">スケジュール管理APP</p>
            <nav>
              <ul className="flex gap-5 text-lime-800">
                <li>ログイン</li>
                <li>利用説明</li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="pt-[50px] bg-gradient-to-r from-lime-200 to-lime-300 h-screen">
          <div className="text-center pt-[10vh]">
            <h1 className="logo text-7xl">スケジュール管理App</h1>
            <p className="text-5xl pt-[10vh]">スケジュール管理します。</p>
          </div>
          <div className="text-center pt-[10vh]">
            <button className="bg-lime-800 text-white p-4 text-lg rounded-lg">
              ログイン
            </button>
          </div>
        </main>
      </div>
    );
};
