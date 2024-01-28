import { TagListProps } from './props'

const TagList = ({ tags }: TagListProps) => {
  return (
    <div>
      <ul>
        {tags.map((t) => {
          return <li key={t.id}>{t.name}</li>
        })}
      </ul>
    </div>
  )
}

export default TagList
