


const people = [
    {
      name: 'Doctor1',
      role: 'MBBS ',
      imageUrl:
        'https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-doctor-icon-circle-png-image_2055257.jpg',
    },
    {
      name: 'Doctor2',
      role: 'Dental',
      imageUrl:
        'https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-doctor-icon-circle-png-image_2055257.jpg',

    },
    {
      name: 'Doctor3',
      role: 'Pediatric ',
      imageUrl:
        'https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-doctor-icon-circle-png-image_2055257.jpg',
    },
    {
      name: 'Doctor4',
      role: 'MBBS ',
      imageUrl:
        'https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-doctor-icon-circle-png-image_2055257.jpg',
    },
    {
      name: 'Doctor5',
      role: 'MBBS ',
      imageUrl:
        'https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-doctor-icon-circle-png-image_2055257.jpg',
    },
    {
      name: 'Doctor6',
      role: 'MBBS ',
      imageUrl:
        'https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-doctor-icon-circle-png-image_2055257.jpg',
    },
    {
      name: 'Doctor7',
      role: 'MBBS ',
      imageUrl:
        'https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-doctor-icon-circle-png-image_2055257.jpg',
    }
  ]
  
  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32 my-1">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Doctors</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hey, let's have a quick intro to our Doctor's and Medical staff
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }