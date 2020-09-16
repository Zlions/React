import studentTable from '../studentTable'
import { connect } from 'umi'

const mapStateToProps = state => ({
    datas: state.student.result.datas
})

export default connect(mapStateToProps, null)(studentTable)