import React from "react";

function DashboardContainer() {
  /* ********** Main return statement of this component ********** */
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          User authentication can be handled in a myriad of ways. Because of
          this feature’s importance, we’ve seen more companies provide
          authentication solutions to ease the process — Firebase, Auth0, and
          NextAuth.js, to name a few. Regardless of how such services handle
          authentication and authorization on their end, the implementation
          process typically involves calling some API endpoints and receiving a
          private token — usually a JSON Web Token, or JWT — to be used in your
          frontend infrastructure. In this article, you’ll learn how to use
          Redux Toolkit (RTK) and RTK Query to create a frontend authentication
          workflow in React. We’ll use essential Toolkit APIs like createSlice,
          createAsyncThunk, createApi, and fetchBaseQuery to make asynchronous
          requests to an Express backend.
        </div>
      </div>
    </div>
  );
}

export default DashboardContainer;
