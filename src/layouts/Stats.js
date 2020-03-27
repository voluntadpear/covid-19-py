import React from 'react'
import { useTranslation } from 'react-i18next'
import PyChart from '../components/PyChart'
import ColoredA from '../components/ColoredA'

const Stats = ({location}) => {
  console.log(location)
  const { t } = useTranslation('stats')
  return (
    <main className="fdb-block" tabIndex="-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12 col-xl-12">

            <h2 className="h1">{t('title')}</h2>
            {/*<h2>{t('subTitle')}</h2>
            <Trans i18nKey="stats:alignDescription">
              El siguiente gráfico muestra una estimación de cuántos días atrȧs
              del país con más infecciones (Brasil) se encuentran los demás
              países de la región. Para detalles de cómo se alinean estas curvas
              se utiliza&nbsp
              <ColoredA href="https://github.com/torresmateo/covid19/blob/master/update_and_process_data.py#L101" rel="noopener noreferrer" alt={t('repo')}>
                este método
              </ColoredA>
              . Los datos se actualizan cada hora.
            </Trans>
            <div id="chart">
              <AlignmentChart />
            </div>*/}
            <h3 className="h2">Modelo Predictivo</h3>
            <p>
              El siguiente gráfico muestra una estimación de los casos confirmados (acumulados) para los 
              siguientes dos días usando un modelo logístico.
              Detalles del modelo pueden estudiarse <ColoredA href="https://github.com/torresmateo/covidpy-rest/blob/4b6fc38811708a6762fd0c8d21357c23ad244ad6/app.py#L63" rel="noopener noreferrer" alt={t('repo')}>
                aquí
              </ColoredA>
            </p>
            <div id="chart2">
              <PyChart/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Stats
