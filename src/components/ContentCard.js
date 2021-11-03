export default function ContentCard(){
    return (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block">
              <h2 className="tm-block-title">Latest Hits</h2>
              <canvas id="barChart" width="575" height="287" style={{block: 'block',height: '230px', width: '460px'}} className="chartjs-render-monitor"></canvas>
            </div>
          </div>
    );
}