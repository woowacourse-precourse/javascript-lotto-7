/* eslint-disable max-classes-per-file */
import Module from '../src/lib/Module.js';

describe('Module', () => {
  let module;

  beforeEach(() => {
    class Model {
      #data = 'woowa';

      getData() {
        return this.#data;
      }
    }

    class Model2 {
      #data = 'course';

      getData() {
        return this.#data;
      }
    }

    class View {
      output(value) {
        return value;
      }
    }

    class Controller {
      #view;

      #service;

      constructor({ views, services }) {
        const { View: testView } = views;
        const { Service: testService } = services;

        this.#view = testView;
        this.#service = testService;
      }

      init() {
        // eslint-disable-next-line no-console
        console.log(this.#view.output(this.#service.getInfo()));
      }
    }

    class Service {
      #model;

      #model2;

      #provider;

      constructor({ models, providers }) {
        const { Model: testModel, Model2: testModel2 } = models;
        const { Provider: testProvider } = providers;

        this.#model = testModel;
        this.#model2 = testModel2;
        this.#provider = testProvider;
      }

      getInfo() {
        return this.#model.getData() + this.#model2.getData() + this.#provider.getData();
      }
    }

    class Provider {
      getData() {
        return 'precourse';
      }
    }

    module = new Module({
      models: [Model, Model2],
      views: [View],
      controllers: [Controller],
      services: [Service],
      providers: [Provider],
    });
  });

  describe('generate', () => {
    it('객체의 이름을 키, 객체를 값으로 가지는 새로운 인스턴스 객체를 반환해야한다.', () => {
      class Test {
        #text = 'generated';

        test() {
          return this.#text;
        }
      }

      const instantiatedObject = Module.generate([Test]);

      expect(instantiatedObject.Test).toBeInstanceOf(Test);
    });
  });

  describe('init', () => {
    it('init 실행 시 controller가 실행되어야 한다', async () => {
      const consoleSpy = jest.spyOn(console, 'log');

      await module.init();

      expect(consoleSpy).toHaveBeenCalledWith('woowacourseprecourse');
    });
  });
});
