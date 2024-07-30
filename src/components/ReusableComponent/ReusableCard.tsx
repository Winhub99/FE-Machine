import Card from './Card'

const ReusableCard = () => {
    return (
        <div>
            <Card header="Twitter Header" type="Twitter">
                <p>This is a post on Twitter.</p>
            </Card>
            <Card header="FaceBook Header" type="Facebook">
                <p>This is a post on Facebook.</p>
            </Card>
            <Card header="Default Header" type="Default">
                <p>This is a default card with no specific type styling.</p>
            </Card>


        </div>
    )
}

export default ReusableCard
