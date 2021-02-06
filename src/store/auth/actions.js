import agent from '../../api/agent'
let timer;

export default {
  async login(context, payload) {

    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;

    // let url =
    //   'http://localhost:5000/api/auth/login';

    // if (mode === 'signup') {
    //   url =
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvOcmh_Avvu08bFdUHdmJzA06c6vV4h0E';
    // }
    // const responsee = await fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: payload.email,
    //     password: payload.password,
    //   })
    // });

    let response;
    try {
       response = mode === 'signup' ?
        await agent.Auth.register(payload) 
        :
        await agent.Auth.login(payload);
    } catch (error) {
      console.log(error)
   
      throw new Error(
        error.statusText || Object.values(error.data.errors)[0][0] || 'Failed to authenticate. Check your login data.'
      );

    }







    // console.log(response)
    // const responseData = await response.json();

    // if (!response.ok) {
    //   const error = new Error(
    //     'Failed to authenticate. Check your login data.'
    //   );
    //   throw error;
    // }

    const expiresIn = +response.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', response.token);
    localStorage.setItem('userId', response.username);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: response.token,
      userId: response.username
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId
      });
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
};
