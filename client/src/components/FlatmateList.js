import React from "react";
import axios from "axios";
import "./FlatmateList.css";

// import Flatmate from "./Flatmate";

const FlatmateList = props => {
  // console.log("FLATMATES", props.flatmate);
  // console.log("TASKS", props.tasks);

  //return <Flatmate key={x._id} user={x} />;

  const removeTask = id => {
    // console.log(id);
    axios.put(`/api/dashboard/remove/${id}`).then(response => {
      console.log("this is the Axios response: ", response);
      props.getData();
    });
  };

  const checkTask = id => {
    axios.put(`/api/dashboard/check/${id}`).then(response => {
      console.log("this is the Axios response: ", response);
      props.getData();
    });
  };

  const flatmate = props.flatmate.map(x => {
    const tasks = props.tasks
      // UNASSIGN TASKS RIGHT BACK
      .filter(t => {
        // console.log("TASK", t, "USERNAME", x);
        return t.user.username === x.username;
      })
      .map(t => {
        // console.log(t);
        return (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {t.finished ? (
                <p
                  key={t._id}
                  style={{ textDecoration: "line-through", color: "#98bc76" }}
                  onClick={() => removeTask(t._id)}
                >
                  {t.name}
                </p>
              ) : (
                <p onClick={() => removeTask(t._id)}>{t.name}</p>
              )}
              <img
                key={t._id}
                id="check"
                alt=""
                src={require("../images/check.png")}
                style={{ cursor: "pointer" }}
                onClick={() => checkTask(t._id)}
              />
            </div>
          </>
        );
      });
    return (
      <div>
        <h1 className="bottom-chalk-border"> {x.username} </h1>
        <h2>{tasks}</h2>
      </div>
    );
  });

  return <div>{flatmate}</div>;
};

export default FlatmateList;
