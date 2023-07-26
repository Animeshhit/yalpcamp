import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/welcome";
import Card from "../components/Card";
import Styled from "styled-components";
import Container from "../components/Container";
import Footer from "../components/Footer";
import HeaderMessage from "../components/HeaderMessage";
import axios from "axios";
import { BaseUrl } from "../config";

const Search = ({ setProgress, toast }) => {
  const [posts, setPosts] = useState(null);
  const getPosts = async () => {
    try {
      let response = await axios.get(`${BaseUrl}/api/v1/posts`);
      setPosts(response.data.posts);
    } catch (err) {
      setPosts([]);
      toast.error(err.message);
    }
  };
  useEffect(() => {
    setProgress(30);
    getPosts();
    setProgress(100);
  }, []);
  return (
    <div>
      <HeaderMessage />
      <Navbar setProgress={setProgress} toast={toast} />
      <Welcome />
      <Grid>
        <Container>
          <div className="grid-container">
            {posts ? (
              posts.length > 0 ? (
                <>
                  {posts.map((post, index) => {
                    return (
                      <Card
                        key={index}
                        image={post.image}
                        title={post.title}
                        description={post.description}
                        id={post._id}
                      />
                    );
                  })}
                </>
              ) : (
                <h2 className="heading-font">No posts Found!!</h2>
              )
            ) : (
              <>
                <h2 className="heading-font">Loading Posts...</h2>
              </>
            )}
          </div>
        </Container>
      </Grid>
      <Footer />
    </div>
  );
};

const Grid = Styled.div`
 margin-top:4rem;
 margin-bottom:5rem;
 .grid-container{
  display:grid;
  grid-template-columns: repeat(3, 350px);
  justify-content:center;
  gap:1rem;
  @media(max-width:1100px){
    grid-template-columns: repeat(2, 350px);
  }
  @media(max-width:780px){
    grid-template-columns: repeat(1, 350px);
  }
  @media(max-width:550px){
    grid-template-columns:repeat(1,1fr);
  }
 }
`;

export default Search;
