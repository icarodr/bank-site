

const features = [
    { name: 'Security', description: 'This bank has a safe and complete transaction system.' },
    { name: 'Cards', description: 'Personalized cards with different possibilities' },
    { name: 'Support', description: 'Total attention to customers with a 24-hour service support' },
  ]
  
  export default function Content() {
    return (
      <div className="bg-black">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Bank Overview</h2>
            <p className="mt-4 text-white">
            Oracibank has several singularities to bring a good experience to all customers, 
            increasing the level of satisfaction with all easily accessible services
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-white">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-white">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://i.pinimg.com/originals/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 border"
            />
            <img
              src="https://i.pinimg.com/736x/c0/c6/ff/c0c6ffeb26cebdc2fe976a7dee95830e.jpg"
              className="rounded-lg bg-gray-100 border"
            />
            <img
              src="https://media.istockphoto.com/id/1169954359/pt/vetorial/piggy-bank-icon-on-black-background-black-flat-style-vector-illustration.jpg?s=170667a&w=0&k=20&c=DqbBU8mzOrIgI6vuGWG0q-_NYaEHKzeGa9-GO0MhsFU="
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100 border"
            />
            <img
              src="https://i.pinimg.com/736x/ca/d8/8b/cad88b1b58f09f5f9f100f6abf9fa8e2.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100 border"
            />
          </div>
        </div>
      </div>
    )
  }