import React from 'react'

function Body() {
    return (
        <div>
        <div style={{height:'125px',backgroundColor:'black'}}></div>
        <section style={{backgroundColor: 'black',position:'relative'}}>
        <h5 style={{fontSize: 3+'em', color:'blue'}} class="know-more-h5">OPEN BANKING</h5>
        <hr className="hr-line"/>
        <br/>
        <div class="text-white" style={{width:'fit-content', height: 'fit-content', borderRadius: '5%'}}>
            <div class="card-body">
                
                <h3 class="card-title know-more-h5" style={{textAlign: 'center'}} onclick="location.href='#VISION'">MISSION</h3>
                <div className="section-body">
                    <div className="section-img">
                        <img src="" height="200px" width="200px" objectFit="contain" alt=""/>
                    </div>

                    <div className="section-content">
                    <h5 class="card-text" style={{ paddingLeft: '0vw', paddingRight: '0vw'}}>
                    Our target is to develop an ecosystem of products and services augmented with production
                    environments, FraudiFy Certified APIs by PSD2, enhanced authentication by OpenID and multi-factor
                    authentication. <br/>
                    With the UK as the initial market, we are working on an expansion strategy for the USA, Canada and
                    Australia.
                    </h5>
                    </div>
                
                </div>
                <br/>
                {/* <i class="fas fa-check-circle circle-color"></i> */}
                <h3  id="VISION" class="card-title know-more-h5" style={{textAlign: 'center'}}>VISION</h3>
                <div className="section-body">
                    

                    <div className="section-content">
                    <h5 class="card-text" style={{ paddingLeft: '0vw', paddingRight: '0vw'}}>
                    The product utilizes the Open Banking Initiative’s technical architecture and advanced security
                    mechanisms to develop an integrated ecosystem. It will enable banks to offer a comprehensive and
                    dynamic service portfolio with impenetrable security for the user’s data. An ecosystem of services
                    and
                    authenticated APIs will be made available to fintech companies.
                    </h5>

                    <div className="section-img">
                        <img src="" height="200px" width="200px" objectFit="contain" alt=""/>
                    </div>
                    </div>
                
                </div>
                
                <br/>
                <h3  class="card-title know-more-h5" style={{textAlign: 'center'}}>PROJECT DESCRIPTION</h3>
                <div className="section-body">
                    

                    <div className="section-content">
                    <h5 class="card-text" style={{ paddingLeft: '0vw', paddingRight: '0vw'}}>
                    Open banking allows access and control of consumer banking and financial accounts through
                    third-party applications. It has the potential to reshape the competitive landscape and consumer
                    experience of the banking industry. It raises the potential for both promising gains and grave risks
                    to consumers as more of their data is shared more widely.<br/><br/>
                    Also known as ‘Open Bank Data’, this banking practice provides third-party financial service
                    providers free access to consumer banking, transaction, and other financial data from banks and
                    non-bank financial institutions through the use of application programming interfaces
                    (APIs).<br/><br/>

                    The features we provide are:<br/><br/>

                    Account Aggregation:
                    The users will be able to add multiple accounts (even from different banks).<br/><br/>

                    Transaction:
                    We provide two highly secure APIs (PISP & AISP) for transactions.<br/><br/>

                    AI Analytics:
                    Our scripts allow the user to get detailed insights in the form of graphs and text.<br/><br/>

                    Block Cards:
                    User details can easily be shared in the form of digital cards, for any account.<br/><br/>

                    Document Vault:
                    Users will store sensitive documents in our highly secure vaults built on blockchain.<br/><br/>
                </h5>
                    
                    <div className="section-img">
                        <img src="" height="200px" width="200px" objectFit="contain" alt=""/>
                    </div>
                    </div>
                
                </div>
                
                <br/>
                {/* <h3 class="card-title know-more-h5" style={{textAlign: 'center'}}>PUBLIC DESCRIPTION</h3>
                <h5 class="card-text" style={{textAlign: 'center', paddingLeft: '0vw', paddingRight: '0vw'}}>
                    Our web app allows users to bank from their systems, remotely and conveniently. It is time and
                    labour
                    efficient and offers features to establish user control over cash flow. We estimate that through the
                    OB
                    platform, banks will be able to generate approximately 30% more revenue.
                </h5>
                <br/> */}
                <h3  class="card-title know-more-h5" >SCOPE</h3>
                <div className="section-body">
                    
                    <div className="section-img">
                        <img src="" height="200px" width="200px" objectFit="contain" alt=""/>
                    </div>

                    <div className="section-content">
                    <h5 class="card-text" style={{ paddingLeft: '0vw', paddingRight: '0vw'}}>
                    Our platform is very secure owing to the addition of extra security layers. Also, the blockchain
                    technology used in the OB platform for storing sensitive documents makes it highly trustworthy and
                    secure.
                    </h5>

                    
                    </div>
                
                </div>
                {/* <h5 class="card-text" style={{textAlign: 'center', paddingLeft: '0vw', paddingRight: '0vw'}}>
                    Our platform is very secure owing to the addition of extra security layers. Also, the blockchain
                    technology used in the OB platform for storing sensitive documents makes it highly trustworthy and
                    secure.
                </h5> */}
                <br/>
                {/* <h3  class="card-title know-more-h5" style={{textAlign: 'center'}} >USP</h3>
                <h5 class="card-text" style={{textAlign: 'center', paddingLeft: '0vw', paddingRight: '0vw'}}>
                    Our product, powered by analytics, produces a full visualization,
                    combined with a detailed
                    analysis.<br/><br/>
                    The product offers convenience and time efficiency, enabling a user to
                    compare multiple
                    transactions with ease.<br/><br/>
                    Our product is incredibly safe, owing to the additional layer of
                    security through AISP & PISP
                    APIs.<br/><br/>
                    The borrower can share their contact details, income, credit score and
                    history with the
                    lender at the click of a button.<br/><br/>
                    End to End encryption enables information to be exchanged and stored very
                    safely.<br/><br/>
                </h5> */}
            </div>
        </div>
    </section>
        </div>
    )
}

export default Body
