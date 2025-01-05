export const TopPage = () => {
  return (
    <div className="relative">
        <header className="leading-[50px] fixed top-0 right-0 left-0">
            <div className="flex justify-between">
                <p className="logo">スケジュール管理</p>
                <nav>
                    <ul className="flex gap-3 text-lime-800">
                        <li>ログイン</li>
                        <li>利用説明</li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}
