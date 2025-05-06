
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Навигация */}
      <header className="border-b sticky top-0 z-10 bg-white">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="font-bold text-2xl text-yellow-500">ВААУ</div>
            <span className="bg-yellow-500 text-white px-2 py-0.5 text-xs rounded-md">БАНК</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-yellow-500 transition-colors">Услуги</a>
            <a href="#benefits" className="text-sm hover:text-yellow-500 transition-colors">Преимущества</a>
            <a href="#partnership" className="text-sm hover:text-yellow-500 transition-colors">Партнерство</a>
            <a href="#contact" className="text-sm hover:text-yellow-500 transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex text-yellow-600 border-yellow-400 hover:bg-yellow-50">
            <Icon name="User" className="mr-2 h-4 w-4" />
            Личный кабинет
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" />
          </Button>
        </div>
      </header>

      <main>
        {/* Герой-секция */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Банк, который всегда <span className="text-yellow-500">добивается цели</span></h1>
              <p className="text-gray-600 mb-8">ВААУ Банк — это современные финансовые решения с простым управлением и внушительной системой мотивации для сотрудников. Мы делаем банкинг понятным и выгодным.</p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                  Открыть счёт
                </Button>
                <Button variant="outline" size="lg" className="border-yellow-400 text-yellow-600 hover:bg-yellow-50">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2071&auto=format&fit=crop" 
                alt="Банковская карта" 
                className="rounded-lg shadow-lg max-w-full"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm font-medium">Инновационный подход</span>
                </div>
                <p className="text-xs text-gray-500">Мы сотрудничаем с каршеринговыми компаниями</p>
              </div>
            </div>
          </div>
        </section>

        {/* Услуги */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
            
            <div className="grid md:grid-cols-5 gap-6">
              <Card className="hover:shadow-md transition-shadow hover:border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Banknote" className="h-5 w-5 text-yellow-500" />
                    Кредитование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Выгодные кредиты с низкими ставками для любых целей.</p>
                  <Button variant="link" className="p-0 mt-4 text-yellow-600">Подробнее</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow hover:border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="PiggyBank" className="h-5 w-5 text-yellow-500" />
                    Вклады
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Надежное сбережение с высоким процентом доходности.</p>
                  <Button variant="link" className="p-0 mt-4 text-yellow-600">Подробнее</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow hover:border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Shield" className="h-5 w-5 text-yellow-500" />
                    Страхование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Полная защита от рисков для вас и вашего бизнеса.</p>
                  <Button variant="link" className="p-0 mt-4 text-yellow-600">Подробнее</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow hover:border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Wallet" className="h-5 w-5 text-yellow-500" />
                    Депозиты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Специальные условия для крупных сумм и бизнеса.</p>
                  <Button variant="link" className="p-0 mt-4 text-yellow-600">Подробнее</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow hover:border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="h-5 w-5 text-yellow-500" />
                    Ценные бумаги
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Инвестиции в акции, облигации и другие финансовые инструменты.</p>
                  <Button variant="link" className="p-0 mt-4 text-yellow-600">Подробнее</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section id="benefits" className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-yellow-100 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold mb-2">Положительная статистика</h3>
                <p className="text-sm text-gray-600">Наш банк показывает стабильный рост и развитие на протяжении всего периода работы. Доверие более 2 миллионов клиентов.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-yellow-100 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Gift" className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold mb-2">Классные мерси</h3>
                <p className="text-sm text-gray-600">Уникальная система бонусов и кэшбэков для наших клиентов. Получайте вознаграждения за каждую операцию.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-yellow-100 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Target" className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold mb-2">Всегда добиваемся цели</h3>
                <p className="text-sm text-gray-600">Мы ориентированы на результат и всегда выполняем взятые на себя обязательства. Ваши финансовые цели — наш приоритет.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-yellow-100 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold mb-2">Мотивационная система для сотрудников</h3>
                <p className="text-sm text-gray-600">Мы ценим наших сотрудников и создаём для них внушительную систему мотивации, что напрямую влияет на качество обслуживания клиентов.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-yellow-100 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold mb-2">Простой тип управления</h3>
                <p className="text-sm text-gray-600">Прозрачная структура управления банком позволяет нам оперативно реагировать на изменения рынка и запросы клиентов.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Партнерство */}
        <section id="partnership" className="py-16 bg-white relative overflow-hidden">
          <div className="absolute -right-20 top-10 opacity-5">
            <Icon name="Car" className="h-96 w-96 text-yellow-500" />
          </div>
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12">Наша уникальная особенность</h2>
            
            <div className="bg-yellow-50 rounded-xl p-8 border border-yellow-100 shadow-sm max-w-4xl mx-auto">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-yellow-500 h-20 w-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Car" className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Партнерство с каршерингом</h3>
                  <p className="text-gray-600">Мы первый банк, который тесно сотрудничает с ведущими каршеринговыми компаниями</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-2">Специальные тарифы</h4>
                  <p className="text-sm text-gray-500">Держатели наших карт получают скидки до 30% на аренду автомобилей</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-2">Бонусная программа</h4>
                  <p className="text-sm text-gray-500">Накапливайте бонусы за банковские операции и тратьте их на поездки</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-2">Интеграция сервисов</h4>
                  <p className="text-sm text-gray-500">Управляйте арендой автомобиля прямо из нашего мобильного приложения</p>
                </div>
              </div>
              
              <Button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white">Узнать подробнее о партнерстве</Button>
            </div>
          </div>
        </section>

        {/* Статистика */}
        <section className="py-12 bg-yellow-500 text-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold mb-2">2M+</h3>
                <p>Довольных клиентов</p>
              </div>
              
              <div>
                <h3 className="text-4xl font-bold mb-2">97%</h3>
                <p>Положительных отзывов</p>
              </div>
              
              <div>
                <h3 className="text-4xl font-bold mb-2">15</h3>
                <p>Лет на рынке</p>
              </div>
              
              <div>
                <h3 className="text-4xl font-bold mb-2">250+</h3>
                <p>Отделений по стране</p>
              </div>
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section id="reviews" className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-yellow-50 border-none">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="bg-yellow-200 h-12 w-12 rounded-full flex items-center justify-center">
                      <span className="font-bold text-yellow-700">АП</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Анна Петрова</h4>
                      <p className="text-xs text-gray-500">Клиент с 2020 года</p>
                    </div>
                  </div>
                  <p className="text-gray-700">\"Пользуюсь услугами банка ВААУ уже более трех лет. Особенно нравится бонусная программа и интеграция с каршерингом. Очень удобно!\"</p>
                  <div className="flex mt-4">
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-yellow-50 border-none">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="bg-yellow-200 h-12 w-12 rounded-full flex items-center justify-center">
                      <span className="font-bold text-yellow-700">МС</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Михаил Соколов</h4>
                      <p className="text-xs text-gray-500">Клиент с 2021 года</p>
                    </div>
                  </div>
                  <p className="text-gray-700">\"Инвестирую через ВААУ Банк в ценные бумаги. Отличные условия и очень удобное приложение для отслеживания инвестиций. Рекомендую!\"</p>
                  <div className="flex mt-4">
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="StarHalf" className="text-yellow-500 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-yellow-50 border-none">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="bg-yellow-200 h-12 w-12 rounded-full flex items-center justify-center">
                      <span className="font-bold text-yellow-700">ЕВ</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Елена Васильева</h4>
                      <p className="text-xs text-gray-500">Клиент с 2019 года</p>
                    </div>
                  </div>
                  <p className="text-gray-700">\"Оформила кредит на очень выгодных условиях. Процесс был быстрым и простым. Сотрудники помогли выбрать оптимальную программу.\"</p>
                  <div className="flex mt-4">
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Контактная форма */}
        <section id="contact" className="py-16 bg-yellow-500 text-white">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
              <p className="mb-8">Оставьте свои контактные данные, и наш специалист свяжется с вами в ближайшее время</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Ваше имя" className="px-4 py-3 rounded-lg text-gray-800 w-full" />
                <input type="tel" placeholder="Ваш телефон" className="px-4 py-3 rounded-lg text-gray-800 w-full" />
              </div>
              <Button className="w-full bg-white text-yellow-600 hover:bg-yellow-50">Отправить заявку</Button>
              <p className="text-xs mt-4 opacity-80">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="font-bold text-2xl text-yellow-400">ВААУ</div>
                <span className="bg-yellow-500 px-2 py-0.5 text-xs rounded-md">БАНК</span>
              </div>
              <p className="text-gray-400 text-sm">Современные финансовые решения для вас и вашего бизнеса</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Кредитование</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Вклады</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Страхование</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Ценные бумаги</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">О банке</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Партнерство</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  8 (800) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  info@vaau-bank.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  г. Москва, ул. Банковская, 123
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500"> 2025 ВААУ Банк. Все права защищены.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" aria-label="Facebook">
                <Icon name="Facebook" className="h-5 w-5 text-gray-500 hover:text-yellow-400 transition-colors" />
              </a>
              <a href="#" aria-label="Instagram">
                <Icon name="Instagram" className="h-5 w-5 text-gray-500 hover:text-yellow-400 transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <Icon name="Twitter" className="h-5 w-5 text-gray-500 hover:text-yellow-400 transition-colors" />
              </a>
              <a href="#" aria-label="Youtube">
                <Icon name="Youtube" className="h-5 w-5 text-gray-500 hover:text-yellow-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;