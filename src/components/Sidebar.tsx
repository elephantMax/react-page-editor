type SideBarProps = {
    sidebarOpenned: boolean,
    setSidebarOpenned: Function
}

const Sidebar = ({ sidebarOpenned, setSidebarOpenned }: SideBarProps) => {
    return (
        <aside className={`sidebar ${sidebarOpenned ? 'sidebar--open' : ''}`}>
            <div className="sidebar__body">
                <h2 className="sidebar__header">
                    Sidebar header
                </h2>
                <button className="sidebar__closer" onClick={() => setSidebarOpenned(false)}>
                    &times;
                </button>
                <form className="sidebar__form form">
                    <h3 className="form__title">
                        Form
                    </h3>
                    <div className="form__body">
                        <div className="form__field">
                            <label className="form__label">
                                Размер шрифта
                            </label>
                            <input className="form__input" type="number" />
                        </div>
                        <div className="form__field">
                            <label className="form__label">
                                Цвет текста
                            </label>
                            <input className="form__input" type="color" />
                        </div>
                        <div className="form__field">
                            <label className="form__label">
                                Цвет фона
                            </label>
                            <input className="form__input" type="color" />
                        </div>
                    </div>
                </form>
                {
                    !sidebarOpenned && (
                        <span className="sidebar__openner" onClick={() => setSidebarOpenned(true)}>
                            &#60;
                        </span>
                    )
                }
                <div className="sidebar__footer">
                    <button className="btn btn-red">Удалить элемент</button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;