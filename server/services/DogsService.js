

let fakeDb = {

  Dogs: [
    {name: 'Bernie', color: 'Brown', age: 2},
    {name: 'Clifford', color: 'Green', age: 50},
    {name: 'Johnny', color: 'Tan', age: 10}
  ]
}

class DogsService{
  async getDogs() {
    return fakeDb.Dogs
  }
  createDog(dogData) {
    fakeDb.Dogs.push(dogData)
    return dogData
  }
  async deleteDog(name) {
    fakeDb.Dogs = fakeDb.Dogs.filter(d => d.name != name)
    return 'dog has been adopted'
  }

}

export const dogsService = new DogsService()