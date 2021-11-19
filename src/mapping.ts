import { NameUpdated } from '../generated/HelloWorld/HelloWorld'
import { Name } from '../generated/schema'

export function handleNameUpdated(event: NameUpdated): void {
  let id = event.transaction.hash.toHex()
  let name = Name.load(id)
  if (name == null) {
    name = new Name(id)
  }
  name.newName = event.params.newName
  name.updater = event.params.updater
  name.save()
}