import React from 'react';
import Layout from '@theme/Layout';
import GameIntroPage from '../../components/GameIntroPage/GameIntroPage';
import Head from '@docusaurus/Head';

const description= "a simple match game"

export default function Hello() {
  return (
    <Layout title="OneUnite" description="One Unite game">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <GameIntroPage icon='/img/oneunite/icon.png' name="One Unite" description={description} />
      </div>
    </Layout>
  );
}