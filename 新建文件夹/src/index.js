import React from 'react';
import dva, { connect } from 'dva';

const app = dva();

app.model(require('./models/Div1').default)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');