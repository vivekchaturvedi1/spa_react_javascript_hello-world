import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";

export const ProfilePage = () => {
  // const user = {
  //   nickname: "Customer",
  //   name: "One Customer",
  //   picture: "https://cdn.auth0.com/blog/hello-auth0/auth0-user.png",
  //   updated_at: "2021-05-04T21:33:09.415Z",
  //   email: "customer@example.com",
  //   email_verified: false,
  //   sub: "auth0|12345678901234567890",
  // };

  const { user } = useAuth0();
    if (!user) {
      return null;
    }

  // return (
  //   <PageLayout>
  //     <div className="content-layout">
  //       <h1 id="page-title" className="content__title">
  //         Profile Page
  //       </h1>
  //       <div className="content__body">
  //         <p id="page-description">
  //           <span>
  //             <strong>Only authenticated users should access this page.</strong>
  //           </span>
  //         </p>
  //         <div className="profile-grid">
  //           <div className="profile__header">
  //             <img
  //               src={user.picture}
  //               alt="Profile"
  //               className="profile__avatar"
  //             />
  //             <div className="profile__headline">
  //               <h2 className="profile__title">{user.name}</h2>
  //               <span className="profile__description">{user.email}</span>
  //             </div>
  //           </div>
  //           <div className="profile__details">
  //             <CodeSnippet
  //               title="User Profile Object"
  //               code={JSON.stringify(user, null, 2)}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </PageLayout>
  // );

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              You can use the <strong>ID Token</strong> to get the profile
              information of an authenticated user.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
              </div>
            </div>
            <div className="profile__details">
              <CodeSnippet
                title="Decoded ID Token"
                code={JSON.stringify(user, null, 2)}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
