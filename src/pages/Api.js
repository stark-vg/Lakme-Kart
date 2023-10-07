import React, { useState, useEffect } from "react";
import "react-bootstrap";
import axios from "axios";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import styled from "styled-components";

const Containerfluid = styled.div`
  position: static;
  background: rgba(0,0,0,.4);
  background: linear-gradient(
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2)
  ),
  url("https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?cs=srgb&dl=pexels-delbeautybox-705255.jpg&fm=jpg")
    center;
  width="1690px"
  height="1200px"
  alt="logo"
  background-color: white;
`;

export default function Api() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <>
    <Announcement />
    <Navbar />
    <Containerfluid>
    <div className="App container">
      <div className=" py-4">
        <div className="aaaa">
        
          <h3 align="center">LIVE NEWS JSON DATA UseEffect</h3>
          <br />
        </div>
      </div>

      <div class="row">
        {posts.map((post) => (
          <div class="col-sm-4 mb-5 shadow">
            <div class="card mt-6">
              <img src={post.img} width={413} height={350} alt="logo" />
              <div class="card-body">
                <div class="row col-sm">
                  <h2 class="card-title text">{post.char_id}</h2>
                  <h2 class="card-title text-primary"> {post.name}</h2>
                </div>
              </div>
              <div class="card-footer">
                <table class="table border shadow">
                  <tr>
                    <th width="30%">Nickname</th>
                    <td width="2%">:</td>
                    <td>{post.nickname}</td>
                  </tr>
                  <tr>
                    <th width="30%">Status </th>
                    <td width="2%">:</td>
                    <td>{post.status}</td>
                  </tr>
                  <tr>
                    <th width="30%">D.O.B</th>
                    <td width="2%">:</td>
                    <td>{post.birthday}</td>
                  </tr>
                  <tr>
                    <th width="30%">Portrayed</th>
                    <td width="2%">:</td>
                    <td>{post.portrayed}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Containerfluid>
    </>
  );
}
