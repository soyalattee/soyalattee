function Header({}) {
  return (
    <div className="header">
      <p className="header-title">박소연</p>
      <div className="contact-menu">
        {/* 링크랑 아이콘 넣어놓기! */}
        <div className="mail"></div>
        <div className="blog"></div>
      </div>
    </div>
  );
}

export default Header;
