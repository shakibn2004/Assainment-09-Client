import React from 'react';

const Dashboad = () => {
    return (
        <div className='p-10 w-full'>
            <h1 style={{ fontFamily: "'Fraunces', serif" }} className='text-[1.9rem] font-bold'>
                Welcome back, Shakib 👋
            </h1>
            <p className='secondary-text'>shakibn2004@gmail.com</p>

            <div className='grid grid-cols-5 w-full'>
                {[1, 2, 3, 4, 5

                ].map((item) => (
                    <div key={item} className="stat-card">
                        <div className="stat-card-icon">😫</div>
                        <div>
                            <div className="stat-card-num">num</div>
                            <div className="stat-card-label">label</div>
                        </div>
                    </div>
                ))}
            </div>

            <h3>Recent Activity</h3>

            <div>
                No recent activity yet. Add a pet or explore adoptions!
            </div>

            <div>

                <div>
                    {/* <img src={r.petImage} alt="" style={{ width: 48, height: 48, borderRadius: 10, objectFit: "cover" }} /> */}
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600 }}>Request for </div>
                        {/* <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Submitted {r.requestDate}</div> */}
                    </div>
                    <span className={`badge`}>r status</span>
                </div>

            </div>

        </div>
    );
};

export default Dashboad;