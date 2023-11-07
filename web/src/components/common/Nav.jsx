const Nav = (props) => {
    return (
        <div style={{ background: '#fff', borderBottom: '1px solid #cccccc70', display: 'flex',justifyContent: 'space-between', alignItems: 'center' }}>
            <div>{ props.children }</div>
            <div style={{ height: '45px', width: '100%', textAlign: 'center', lineHeight: '45px', color: '#333', fontSize: '18px' }}>{ props.title }</div>
            <div></div>
        </div>
    )
}

export default Nav