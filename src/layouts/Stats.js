import React, { Component } from 'react'

import AlignmentChart from '../components/AlignmentChart'

const Stats = () => {
  return (
    <main className="fdb-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12 col-xl-12">
            <h2>Estadísticas</h2>

            <h3>Comparación de crecimiento</h3>
            <p>
              El siguiente gráfico muestra una estimación de cuántos días atrȧs
              del país con más infecciones (Brasil) se encuentran los demás
              países de la región. Para detalles de cómo se alinean estas curvas
              se utiliza{' '}
              <a href="https://github.com/torresmateo/covid19/blob/master/update_and_process_data.py#L101">
                este método
              </a>
              . Los datos se actualizan cada hora.
            </p>
            <div id="chart">
              <AlignmentChart></AlignmentChart>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Stats
