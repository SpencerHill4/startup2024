import React from 'react';

export function Login() {
  return (
    <main class="container-fluid text-center">
      <nav>
        <h2>Welcome to Block Bonanza!</h2>
        <form method="get" action="play.html">
          <div class="input-group mb-3">
            <input class="form-control" type="text" placeholder="username" />
          </div>
          <div class="input-group mb-3">
            <input class="form-control" type="password" placeholder="password" />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <button type="submit" class="btn btn-secondary">Create</button>
        </form>
      </nav>
    </main>
  );
}