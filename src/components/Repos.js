import React, { useState, useEffect } from "react";
import Axios from "axios";
import app from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const Repos = ({ user }) => {
  const [repos, setRepos] = useState([]);
  const { currentUser, setCurrentUserInfo } = useAuth();

  const fetchRepos = async () => {
    const response = await Axios.get(user.repos_url);
    const data = response.data;
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.repos_url]);

  const toggleFav = (repo) => {
    var isFav = currentUser.fav.find((info) => info.id === repo.id);
    console.log(isFav);

    if (!isFav) {
      currentUser.fav.push({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        watchers_count: repo.watchers_count,
        stargazers_count: repo.stargazers_count,
      });
    } else {
      currentUser.fav.splice(
        currentUser.fav.findIndex((info) => info.id === repo.id),
        1
      );
    }

    app.firestore().collection("user").doc(currentUser.id).update({
      fav: currentUser.fav,
    });
    setCurrentUserInfo({ ...currentUser });
  };

  return (
    <div id="display">
      <div id="work">
        <h5 className="d-flex justify-content-between">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="button-tooltip-2">Repos</Tooltip>}>
            <span>
              <i className="fas fa-inbox"></i> {user.public_repos}
            </span>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="button-tooltip-2">gists</Tooltip>}>
            <span>
              <i className="fas fa-clipboard"></i> {user.public_gists}
            </span>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="button-tooltip-2">followers</Tooltip>}>
            <span>
              <i className="fas fa-users"></i> {user.followers}
            </span>
          </OverlayTrigger>
        </h5>
        <div className="projects" id="work_section">
          {repos.map((repo) => (
            <div key={repo.id}>
              <div style={{ width: "100%" }}>
                <section>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="section_title w-100">
                    {repo.name}
                  </a>
                  <div className="about_section">
                    <span style={{ display: "block" }}>{repo.description}</span>
                  </div>
                  <div className="bottom_section">
                    <span style={{ display: "inline-block" }}>
                      <i className="fas fa-code" />
                      &nbsp; {repo.language}
                    </span>
                    <span>
                      <i className="fas fa-star" />
                      &nbsp; {repo.stargazers_count}
                    </span>
                    <span>
                      <i className="fas fa-eye" />
                      &nbsp; {repo.watchers_count}
                    </span>
                    <span onClick={() => toggleFav(repo)}>
                      <i
                        className={
                          currentUser.fav.find((info) => info.id === repo.id)
                            ? "fas fa-heart"
                            : "far fa-heart"
                        }
                      />
                    </span>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repos;
