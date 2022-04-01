import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./heroheader.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { async } from "@firebase/util";
import { randomUser } from "../../redux/action/action";
import {
  saveDocumentInFirestore,
  getDocumentFromFirestore,
} from "../../functions/functions";

const HeroHeader = () => {
  let [randomName, setRandomName] = useState("Someone");
  let randomSignIn = useSelector((state) => state.randomSignIn);
  let dispatch = useDispatch();

  function randomSignInFunc() {
    dispatch(randomUser());
  }

  useEffect(async () => {
    let user = await randomSignIn;
    user.uid && saveDocumentInFirestore(user.uid, { name: randomName });
  }, [randomSignIn]);

  useEffect(async () => {
    let user = await randomSignIn;
    let responseDetails = await getDocumentFromFirestore(user ? user.uid : "0");
    setRandomName("Someone" && responseDetails?.data()?.name);
  }, [randomSignIn]);
  return (
    <div className={styles.hero_header_container}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <div className={styles.joining_section}>
            <Typography varient="h3" component="h3">
              Free Random Chat Rooms
            </Typography>
            <Typography varient="p" component="p">
              Free Chat Online Without Registration
            </Typography>
            <div className={styles.info_sec}>
              <Typography varient="p" component="p">
                What's your nickname?
              </Typography>
              <input
                type="text"
                value={randomName}
                onChange={(e) => setRandomName(e.target.value)}
              />
              <br />
              <button onClick={randomSignInFunc}>Talk to strangers</button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={styles.details}>
            <Typography varient="p" component="p">
              TalkwithStranger provides free random chat with cool people in
              private chat rooms. And it's free online chat, no registration is
              needed! Chat with strangers & send pictures, videos in private
              free chat rooms. Meet & talk to strangers from all over the world.
              To use our free text chatroom site or video chat site, you are
              accepting our Terms of Usage below.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={styles.details}>
            <Typography varient="p" component="p">
              TalkwithStranger provides free random chat with cool people in
              private chat rooms. And it's free online chat, no registration is
              needed! Chat with strangers & send pictures, videos in private
              free chat rooms. Meet & talk to strangers from all over the world.
              To use our free text chatroom site or video chat site, you are
              accepting our Terms of Usage below.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroHeader;
