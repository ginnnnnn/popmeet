import React from 'react';

import './footer.styles.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="first-child">
        <div className="content">
          <h4>認識Popmeet</h4>
          <span>關於Popmeet</span>
          <span>Popmeet Blog</span>
          <span>合作夥伴</span>
          <span>加入Popmeet</span>
        </div>
        <div className="content">
          <h4>Popmeet支援</h4>
          <span>常見問題</span>
          <span>聯繫客服</span>
          <span>新聞稿</span>
        </div>
        <div className="content">
          <h4>網站條款</h4>
          <span>服務條款</span>
          <span>隱私政策</span>
          <span>Cookie政策</span>
        </div>
        <div className="subscribe">
          <h3>訂閱我們的電子報，獲取Popmeet最新消息</h3>
          <input type="email" name="email" placeholder="輸入您的Email" />
          <button>訂閱</button>
        </div>
      </div>
      <div className="last-child">
        <p>@2020 Pop-meet. All right reversed.</p>
      </div>
    </div>
  );
};

export default Footer;
