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
        <main className="pt-[50px] flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 className="text-7xl logo">スケジュール管理App</h1>
            <p className="pt-[10vh] text-5xl">スケジュール管理します。</p>
            <div className="pt-[20vh]">
              {/* ログインボタン */}
              <button className="bg-lime-800 text-white p-4 rounded-lg text-lg">
                ログイン
              </button>
              {/* グラデーション枠線ボタン */}
              <button className="p-1 bg-gradient-to-r from-lime-500 to-orange-500 rounded-lg mt-10">
                <div className="bg-white rounded-lg p-4">
                  グラデーション枠線のボックス
                </div>
              </button>
            </div>
          </div>
        </main>
      </div>
    );
};
