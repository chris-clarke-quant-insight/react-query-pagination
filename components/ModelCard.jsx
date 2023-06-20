import React from "react";

function ModelCard (props) {
    return (
<div className="react-grid-item react-draggable cssTransforms">
    <div className="sc-gKPRtg fUNVRO sc-leiOXd kIyLUc">
        <div className="sc-hDbpAC fRrySF">
        </div>
        <header className="sc-cBIjbw kCbBTs">
            <div className="sc-jTVQyt cwJGTw">
                <a target="_blank" className="sc-ga-DzBV CdPLp" href="/models/GBPUSD?term=short term">
                    <span>{props.item.value}</span>
                    <span className="sc-eBOGjE kZyMlN">Model</span>
                </a>
            </div>
            <div className="sc-keVmGr jcEhAz">
                <button type="button" className="sc-fekXMp hEkWaA">
                    <i className="sc-dIfARi eYEkEv material-icons undefined">info</i>
                </button>
                <button type="button" className="sc-fekXMp hEkWaA">
                    <i className="sc-dIfARi eYEkEv material-icons undefined">more_horiz</i>
                </button>
                <button type="button" className="sc-lmyTeu eMvjVI dragMe">
                    <i className="sc-dIfARi eYEkEv material-icons undefined">zoom_out_map</i>
                </button>
            </div>
        </header>
        <div type="model" className="sc-FIrh kKdoqW">
            <div className="sc-fXUhBo fYHDIh">
                <div value="72.56541" className="sc-hrXEzC cdjzNy">
                    <h6>CONFIDENCE</h6>
                    <h1>73%</h1>
                    <div className="sc-hdxRZL dcOyZW">
                        <section className="sc-kQvLVw bjIcVr">
                            <i className="sc-eThmLp eaodnD material-icons">arrow_downwards</i>
                            <span className="sc-ekdSAv hEEQUG">-4%</span>
                        </section>
                    </div>
                </div>
                <div value="72.56541" className="sc-hrXEzC cdjzNy">
                    <h6>VALUATION GAP</h6>
                    <h1>0.47σ</h1>
                    <div className="sc-hdxRZL dcOyZW">
                        <section className="sc-kQvLVw bjIcVr">
                            <i className="sc-eThmLp hoEate material-icons">arrow_upwards</i>
                            <span className="sc-ekdSAv hEEQUG">0.56</span>
                        </section>
                    </div>
                </div>
            </div>
            <div className="sc-fXUhBo fYHDIh">
                <div className="sc-hrXEzC ea-dMIS">
                    <ul className="sc-jTMoxg dA-DCKi">
                        <li type="positive" className="sc-jFmBXp ikrOBh">Rate Diff. 0.32</li>
                        <li type="positive" className="sc-jFmBXp ikrOBh">Energy 0.20</li>
                    </ul>
                </div>
                <div className="sc-hrXEzC ea-dMIS">
                    <ul className="sc-jTMoxg dA-DCKi">
                        <li type="negative" className="sc-jFmBXp bOLlEk">Risk Aversion -0.47</li>
                        <li type="negative" className="sc-jFmBXp bOLlEk">Growth Expec. Diff. -0.17</li>
                    </ul>
                </div>
            </div>
        <div>
            <div className="sc-cnMZnH hSByNr">
                <section className="sc-cCmLNy lmddrv">
                    <input type="radio" id="qv7l6cqy8bST" data-testid="t_st_btn" className="sc-fIhvWL iTAprC" value="st" />
                    <label for="qv7l6cqy8bST" data-testid="t_st_lbl" className="sc-gkSfol bLGwhT">ST</label>
                    <input type="radio" id="aatxwusy4rLT" data-testid="t_lt_btn" className="sc-fIhvWL iTAprC" value="lt" />
                    <label for="aatxwusy4rLT" data-testid="t_lt_lbl" className="sc-gkSfol bLGwhT">LT</label>
                </section>
                <section>
                    <input type="radio" id="t1bv4atspq2W" data-testid="t_twoWeeks_btn" className="sc-gzrROc gOPKWb" value="twoWeeks" />
                    <label for="t1bv4atspq2W" data-testid="t_twoWeeks_lbl" className="sc-fmPOXC hkggfk">2W</label>
                    <input type="radio" id="72kqlbykh11M" data-testid="t_oneMonth_btn" className="sc-gzrROc gOPKWb" value="oneMonth" />
                    <label for="72kqlbykh11M" data-testid="t_oneMonth_lbl" className="sc-fmPOXC hkggfk">1M</label>
                    <input type="radio" id="j6b1pdg50o2M" data-testid="t_twoMonths_btn" className="sc-gzrROc gOPKWb" value="twoMonths" />
                    <label for="j6b1pdg50o2M" data-testid="t_twoMonths_lbl" className="sc-fmPOXC hkggfk">2M</label>
                </section>
            </div>
        </div>
    </div>
    </div>
</div>
    )
}
export default ModelCard;