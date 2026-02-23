function List() {
    return (

        <><div className="hero-price">
            <h1>Packages/Pricing</h1>
        </div>

            <section className="packages-section">

                <div class="package-card">
                    <h2>Solo</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iusto at facere..</p>
                    <h4>Perfect For:</h4>
                    <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                    <div className="price">$90</div>
                </div>

                <div className="package-card">
                    <h2>The Perfect Match</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iusto at facere..</p>
                    <h4>Perfect For:</h4>
                    <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                    <div className="price">$190</div>
                </div>

                <div className="package-card">
                    <h2>The Covenant</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iusto at facere..</p>
                    <h4>Perfect For:</h4>
                    <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                    <a className="price" href="/Contact">Starting at $2,500</a>
                </div>
            </section></>
    )
}

export default List;