
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
            <div className="font-bold text-2xl text-primary">ВААУ</div>
            <span className="bg-blue-600 text-white px-2 py-0.5 text-xs rounded-md">БАНК</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#benefits" className="text-sm hover:text-blue-600 transition-colors">Преимущества</a>
            <a href="#reviews" className="text-sm hover:text-blue-600 transition-colors">Отзывы</a>
            <a href="#contact" className="text-sm hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Современный банк для современных людей</h1>
              <p className="text-gray-600 mb-8">Мы предлагаем удобные финансовые решения для всех ваших потребностей. Инновационные технологии, выгодные условия и персональный подход.</p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Открыть счёт
                </Button>
                <Button variant="outline" size="lg">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop" 
                alt="Банковская карта" 
                className="rounded-lg shadow-lg max-w-full"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Надежная защита</span>
                </div>
                <p className="text-xs text-gray-500">Ваши данные под надежной защитой</p>
              </div>
            </div>
          </div>
        </section>

        {/* Услуги */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
            
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="personal">Частным лицам</TabsTrigger>
                <TabsTrigger value="business">Бизнесу</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="space-y-4">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="CreditCard" className="h-5 w-5 text-blue-600" />
                        Кредитные карты
                      </CardTitle>
                      <CardDescription>Выгодные условия и кэшбэк</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">До 5% кэшбэка за покупки и до 120 дней без процентов на покупки и снятие наличных.</p>
                      <Button variant="link" className="p-0 mt-4">Подробнее</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Banknote" className="h-5 w-5 text-blue-600" />
                        Вклады
                      </CardTitle>
                      <CardDescription>Высокие проценты по вкладам</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Разместите деньги под выгодный процент и получайте стабильный доход.</p>
                      <Button variant="link" className="p-0 mt-4">Подробнее</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Home" className="h-5 w-5 text-blue-600" />
                        Ипотека
                      </CardTitle>
                      <CardDescription>Ипотека от 4.5% годовых</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Выгодные условия ипотеки с государственной поддержкой и специальные программы.</p>
                      <Button variant="link" className="p-0 mt-4">Подробнее</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="business" className="space-y-4">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Building" className="h-5 w-5 text-blue-600" />
                        Расчетный счет
                      </CardTitle>
                      <CardDescription>Быстрое открытие счета</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Открытие счета за 24 часа с бесплатным обслуживанием на первые 3 месяца.</p>
                      <Button variant="link" className="p-0 mt-4">Подробнее</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="LineChart" className="h-5 w-5 text-blue-600" />
                        Эквайринг
                      </CardTitle>
                      <CardDescription>Выгодные тарифы для бизнеса</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Комиссия от 1.2% и быстрое зачисление средств на расчетный счет.</p>
                      <Button variant="link" className="p-0 mt-4">Подробнее</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="BarChart" className="h-5 w-5 text-blue-600" />
                        Кредитование
                      </CardTitle>
                      <CardDescription>Кредиты для бизнеса</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Различные программы кредитования для малого и среднего бизнеса.</p>
                      <Button variant="link" className="p-0 mt-4">Подробнее</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Преимущества */}
        <section id="benefits" className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShieldCheck" className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Безопасность</h3>
                <p className="text-sm text-gray-600">Современные системы защиты данных и транзакций</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Скорость</h3>
                <p className="text-sm text-gray-600">Быстрое обслуживание и моментальные переводы</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Smartphone" className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Мобильность</h3>
                <p className="text-sm text-gray-600">Управляйте финансами из любой точки мира</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="HeartHandshake" className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Поддержка</h3>
                <p className="text-sm text-gray-600">Круглосуточная помощь и консультации экспертов</p>
              </div>
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section id="reviews" className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-blue-50 border-none">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="bg-blue-200 h-12 w-12 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-700">АП</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Анна Петрова</h4>
                      <p className="text-xs text-gray-500">Клиент с 2020 года</p>
                    </div>
                  </div>
                  <p className="text-gray-700">"Пользуюсь услугами банка уже более трех лет. Особенно радует удобное мобильное приложение и оперативная поддержка."</p>
                  <div className="flex mt-4">
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-none">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="bg-blue-200 h-12 w-12 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-700">МС</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Михаил Соколов</h4>
                      <p className="text-xs text-gray-500">Клиент с 2021 года</p>
                    </div>
                  </div>
                  <p className="text-gray-700">"Отличные условия по кредитам и депозитам. Открыл вклад под выгодный процент, очень доволен сервисом."</p>
                  <div className="flex mt-4">
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="Star" className="text-yellow-500 h-5 w-5" />
                    <Icon name="StarHalf" className="text-yellow-500 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-none">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="bg-blue-200 h-12 w-12 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-700">ЕВ</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Елена Васильева</h4>
                      <p className="text-xs text-gray-500">Клиент с 2019 года</p>
                    </div>
                  </div>
                  <p className="text-gray-700">"Получила ипотеку на очень выгодных условиях. Процесс оформления был быстрым и простым, без лишней бюрократии."</p>
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
        <section id="contact" className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
              <p className="mb-8">Оставьте свои контактные данные, и наш специалист свяжется с вами в ближайшее время</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Ваше имя" className="px-4 py-3 rounded-lg text-gray-800 w-full" />
                <input type="tel" placeholder="Ваш телефон" className="px-4 py-3 rounded-lg text-gray-800 w-full" />
              </div>
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Отправить заявку</Button>
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
                <div className="font-bold text-2xl">ВААУ</div>
                <span className="bg-blue-600 px-2 py-0.5 text-xs rounded-md">БАНК</span>
              </div>
              <p className="text-gray-400 text-sm">Современные финансовые решения для вас и вашего бизнеса</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Кредиты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вклады</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ипотека</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О банке</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
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
            <p className="text-sm text-gray-500">© 2025 ВААУ Банк. Все права защищены.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" aria-label="Facebook">
                <Icon name="Facebook" className="h-5 w-5 text-gray-500 hover:text-white transition-colors" />
              </a>
              <a href="#" aria-label="Instagram">
                <Icon name="Instagram" className="h-5 w-5 text-gray-500 hover:text-white transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <Icon name="Twitter" className="h-5 w-5 text-gray-500 hover:text-white transition-colors" />
              </a>
              <a href="#" aria-label="Youtube">
                <Icon name="Youtube" className="h-5 w-5 text-gray-500 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
