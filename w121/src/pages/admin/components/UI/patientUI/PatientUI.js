import React from 'react'

const PatientUI = () => {
  return (
    <div>

      <div className={'item'} style={{ display: 'flex', gap: '20px', alignItems: 'center', width: '100%', color: 'rgba(0, 126, 133, 1)', justifyContent: 'space-around', marginTop: '20px' }}>
        <div style={{ border: '1px solid black', padding: '3px', borderRadius: '50%' }}> <div className={'block'} style={{
          borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(18, 137, 131, 0.25)'
          , color: 'black'
        }}>ПТ</div></div>
        <div className={'block'} style={{ fontSize: '16px', fontWeight: '700' }}>
          <div style={{ color: "black" }}>Палянчаев тукунчу</div>
          <div>Доктор: ~~~~~~~~~~~</div>
        </div>
        <div className={'block'} style={{ background: 'linear-gradient(0deg, rgba(18, 137, 131, 0.25), rgba(18, 137, 131, 0.25))', padding: '5px 15px', borderRadius: '5px' }}>
          9:15
        </div>
        <div className={'block'}></div>

      </div>
    </div>
  )
}

export default PatientUI