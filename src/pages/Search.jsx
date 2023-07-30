import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Card from "../components/Card";
import Styled from "styled-components";
import Container from "../components/Container";
import Footer from "../components/Footer";
import HeaderMessage from "../components/HeaderMessage";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, setDefault } from "../state/action-creator/postAction";
import LoadingCard from "../components/LoadingCard";

const Search = ({ setProgress, toast }) => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const GetPosts = async () => {
    setProgress(30);
    try {
      dispatch(setDefault());
      await dispatch(getPosts());
    } catch (err) {
      toast.error("Something Went Wrong Please Try Again Later");
      console.log(err);
    }
    setProgress(100);
  };

  useEffect(() => {
    GetPosts();
  }, []);

  return (
    <div>
      <HeaderMessage />
      <Navbar setProgress={setProgress} toast={toast} />
      <Welcome setProgress={setProgress} toast={toast} />
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
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
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
