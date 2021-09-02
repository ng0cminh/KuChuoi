/* eslint-disable @next/next/no-img-element */
import React from "react";

class AuthorBox extends React.Component {
    render () {
        return (
            <div className="widget">
                <h3 className="widget-title">About</h3>
                <div className="widget-content">
                    <figure className="article-figure img-fluid">
                        <img src={`/images/default/article.jpg`} alt="Images1" />
                    </figure>
                    <p>Nội dung giới thiệu tóm tắt về website hoặc bản thân mình để cho mọi người biết về website hoặc bản thân sơ qua</p>
                </div>
            </div>
        )
    }
}

export default AuthorBox;
