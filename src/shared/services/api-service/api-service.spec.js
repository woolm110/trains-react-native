import axios from 'shared/services/axios-service/axios-service';

import ApiService from 'shared/services/api-service/api-service';
import fixture from 'shared/services/api-service/api-service.fixures';

describe('Shared', () => {
  describe('Services', () => {
    describe('ApiService', () => {
      describe('get', () => {
        beforeEach(() => {
          axios.get = jest.fn();
        });

        it('should create a get request to the correct endpoint', () => {
          const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';
          ApiService.get(requestURL);

          expect(axios.get).toHaveBeenCalledWith(
            requestURL,
            expect.any(Object)
          );
        });

        it('should default to headers only config when requested without one', () => {
          const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';
          ApiService.get(requestURL);

          expect(axios.get).toHaveBeenCalledWith(
            expect.any(String),
            {
              headers: {
                Authorization: ''
              }
            }
          );
        });

        it('should merge headers with passed config', () => {
          const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';
          const requestConfig = {
            params: {
              order: 'title'
            },
            headers: {
              Authorization: ''
            }
          };
          ApiService.get(requestURL, requestConfig);

          expect(axios.get).toHaveBeenCalledWith(
            expect.any(String),
            requestConfig
          );
        });
      });

      describe('post', () => {
        const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';
        const requestObject = fixture.data;

        beforeEach(() => {
          axios.post = jest.fn();
        });

        it('should post to the correct endpoint', () => {
          ApiService.post(requestURL, requestObject);
          expect(axios.post).toHaveBeenCalledWith(
            requestURL,
            expect.any(Object),
            expect.any(Object)
          );
        });

        it('should post data', () => {
          ApiService.post(requestURL, requestObject);
          expect(axios.post).toHaveBeenCalledWith(
            expect.any(String),
            requestObject,
            expect.any(Object)
          );
        });

        it('should post data to the correct endpoint with authorization headers if one is not supplied', () => {
          ApiService.post(requestURL, requestObject);
          expect(axios.post.mock.calls[0][2]).toEqual({
            headers: {
              Authorization: ''
            }
          });
        });

        it('should post data to the correct endpoint with combined config', () => {
          const config = {
            params: {
              order: 'title'
            }
          };

          ApiService.post(requestURL, requestObject, config);
          expect(axios.post)
            .toHaveBeenCalledWith(
              expect.any(String),
              expect.any(Object),
              {
                headers: {
                  Authorization: ''
                },
                params: {
                  order: 'title'
                }
              }
            );
        });
      });

      describe('put', () => {
        const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';
        const requestObject = fixture.data;

        beforeEach(() => {
          axios.put = jest.fn();
        });

        it('should post to the correct endpoint', () => {
          ApiService.put(requestURL, requestObject);
          expect(axios.put)
            .toHaveBeenCalledWith(
              requestURL,
              expect.any(Object),
              expect.any(Object),
            );
        });

        it('should post data', () => {
          ApiService.put(requestURL, requestObject);
          expect(axios.put)
            .toHaveBeenCalledWith(
              expect.any(String),
              requestObject,
              expect.any(Object)
            );
        });

        it('should put data to the correct endpoint with authorization headers if one is not supplied', () => {
          ApiService.put(requestURL, requestObject);
          expect(axios.put.mock.calls[0][2]).toEqual({
            headers: {
              Authorization: ''
            }
          });
        });

        it('should put data to the correct endpoint with combined config', () => {
          const config = {
            params: {
              order: 'title'
            }
          };

          ApiService.put(requestURL, requestObject, config);
          expect(axios.put)
            .toHaveBeenCalledWith(
              expect.any(String),
              expect.any(Object),
              {
                headers: {
                  Authorization: ''
                },
                params: {
                  order: 'title'
                }
              }
            );
        });
      });

      describe('patch', () => {
        const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';
        const requestObject = fixture.data;

        beforeEach(() => {
          axios.patch = jest.fn();
        });

        it('should post to the correct endpoint', () => {
          ApiService.patch(requestURL, requestObject);
          expect(axios.patch)
            .toHaveBeenCalledWith(
              requestURL,
              expect.any(Object),
              expect.any(Object)
            );
        });

        it('should post data', () => {
          ApiService.patch(requestURL, requestObject);
          expect(axios.patch)
            .toHaveBeenCalledWith(
              expect.any(String),
              requestObject,
              expect.any(Object)
            );
        });

        it('should patch data to the correct endpoint with authorization headers if one is not supplied', () => {
          ApiService.patch(requestURL, requestObject);
          expect(axios.patch.mock.calls[0][2]).toEqual({
            headers: {
              Authorization: ''
            }
          });
        });

        it('should patch data to the correct endpoint with combined config', () => {
          const config = {
            params: {
              order: 'title'
            }
          };

          ApiService.patch(requestURL, requestObject, config);
          expect(axios.patch)
            .toHaveBeenCalledWith(
              expect.any(String),
              expect.any(Object),
              {
                headers: {
                  Authorization: ''
                },
                params: {
                  order: 'title'
                }
              }
            );
        });
      });

      describe('delete', () => {
        const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';

        beforeEach(() => {
          axios.delete = jest.fn();
        });

        it('should delete an object on an endpoint', () => {
          ApiService.delete(requestURL);
          expect(axios.delete).toHaveBeenCalledWith(
            requestURL
          );
        });
      });
    });
  });
});
