import { Badge, Card, ListGroup } from "react-bootstrap"
import ConditionalDisplay from "../../Components/ConditionalDisplay"
import FieldDisplay from "../../Components/FieldDisplay"
import { ArtifactSetKey, SetNum } from "../../Types/consts"
import ICalculatedStats from "../../Types/ICalculatedStats"
import statsToFields from "../../Util/FieldUtil"
import { usePromise } from "../../Util/ReactUtil"
import { ArtifactSheet } from "../ArtifactSheet"

export default function SetEffectDisplay({ setKey, setNumKey, equippedBuild, newBuild, editable, characterDispatch }: Data) {
  const sheet = usePromise(ArtifactSheet.get(setKey))
  if (!sheet) return null

  const stats = newBuild ?? equippedBuild!
  const setEffectText = sheet.setEffectTexts(setNumKey, stats)
  const setStats = sheet.setNumStats(setNumKey, stats)
  const setStatsFields = statsToFields(setStats, stats)
  const conditionals = sheet.setEffectConditionals(setNumKey, stats)
  return <>
    <Card bg="darkcontent" text={"lightfont" as any} className="mb-2 w-100" >
      <Card.Header className="p-2">
        <Badge variant="success">{setNumKey}-Set</Badge> {setEffectText}
      </Card.Header>
      <ListGroup className="text-white" variant="flush">
        {setStatsFields.map((field, i) => <FieldDisplay key={i} index={i} {...{ field, equippedBuild, newBuild }} />)}
      </ListGroup>
    </Card>
    {Boolean(conditionals) && Object.entries(conditionals!).map(([ckey, conditional]) => <ConditionalDisplay key={ckey as any} {...{ conditional, equippedBuild, newBuild, characterDispatch, editable }} />)}
  </>
}

type Data = {
  setKey: ArtifactSetKey,
  setNumKey: SetNum,
  editable: boolean,
  newBuild?: ICalculatedStats,
  equippedBuild?: ICalculatedStats
  characterDispatch: (arg0: any) => void,
}
